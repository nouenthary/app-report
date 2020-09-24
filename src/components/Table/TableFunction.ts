export const generateColumns = (columns: any) => {
    const cols = []
    if (columns !== null) {
        for (let key in columns) {
            cols.push({
                title: key,
                dataIndex: key,
                width: 200,
            })
        }
    }
    return cols
}

export const checkDataSource = (obj: any) => {
    const data = []
    if (obj !== null) {
        for (let i = 0; i < obj.length; i++) {
            let row = {}
            for (let j in obj[i]) {
                let value = obj[i][j] ? obj[i][j] : 'N/A'
                let news = {[j]: value}
                Object.assign(row, news)
            }
            data.push(row)
        }
    }
    return data
}
