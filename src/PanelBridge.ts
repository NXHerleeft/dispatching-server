/**
 * Defines the interface requirements for the bridge between the simulation and the panel.
 * It interacts directly with the electrical circuit, because the panel consists of the inputs and outputs from the relays
 */
interface PanelBridge {
    circuit: ElectricCircuit;

    setCircuit(circuit: ElectricCircuit);

    /**
     * Returns the name for this bridge
     * @returns {string}
     */
    getName(): string;

    getStatus(): ConnectionStatus;
}