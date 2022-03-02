interface contextParams {
    selectedPattern: null| {
        title: string,
        desc: string,
        example: {
            algoName: string,
            question: string,
            solution: string
        }
    },
    setSelectedPattern: ({}: any) => {}
}

export default<contextParams> {
    selectedPattern: null,
    setSelectedPattern: ({}) => {}
};