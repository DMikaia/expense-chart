fetch("data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const graphContainers = document.querySelectorAll(".graph-container");

    // Find the maximum amount in the data
    const maxAmount = Math.max(...data.map((dayData) => dayData.amount));

    data.forEach((dayData, index) => {
      const graphContainer = graphContainers[index];
      const valueSpan = graphContainer.querySelector(".value");
      const bar = graphContainer.querySelector(".bar");

      // Scale the height based on the maximum amount
      const scaledHeight = (dayData.amount / maxAmount) * 100;
      valueSpan.textContent = `$${dayData.amount.toFixed(2)}`;
      bar.style.height = `${scaledHeight}px`;

      // Check if this day has the highest amount and apply the background color
      if (dayData.amount === maxAmount) {
        bar.style.backgroundColor = "hsl(186, 34%, 60%)";
      }
    });
  });
