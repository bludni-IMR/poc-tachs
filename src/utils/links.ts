export const createPdfLink = (pdfName: string) => {
    return `${process.env.REACT_APP_API}/pdf/${pdfName}.pdf?${Date.now()}`
}