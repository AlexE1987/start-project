export const dataToSend = (id:number, array: any[]) => {
  const copyArray = [...array];
    const index = copyArray.findIndex((item) => item.id === id)
    const data = copyArray[index];
    return data
}