async function getGasPrice() {
    try {
        const response = await fetch('https://www.etherchain.org/api/gasPriceOracle');
        const data = await response.json();
        return parseFloat(data.standard);
    } catch (error) {
        console.error("Error fetching gas price:", error);
        return null;
    }
}

async function checkGasPriceThreshold(thresholdGwei) {
    const gasPrice = await getGasPrice();
    if (gasPrice !== null) {
        console.log("Current gas price:", gasPrice, "Gwei");
        if (gasPrice <= thresholdGwei) {
            console.log("Gas price is below threshold.");
            // Perform actions accordingly
        } else {
            console.log("Gas price is above threshold.");
            // Perform actions accordingly
        }
    } else {
        console.log("Failed to fetch gas price. Please try again later.");
    }
}

// Example usage
checkGasPriceThreshold(50); // Check if gas price is below 50 Gwei