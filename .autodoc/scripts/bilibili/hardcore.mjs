
const regex = /【硬核狠人(\d{1,4})】/

const title2filepath = (title) => {
    const [full, index] = regex.exec(title)
    const indexNum = parseInt(index)
    const indexStr = String(indexNum).padStart(4, '0')
    return `docs/john-khan/hardcore/hardcore_${indexStr}.md`
}

export const listen = function(data) {
    const title = data.archives[0].title
    if (regex.test(title)) {
        return {
            filepath: title2filepath(title),
        }
    }
}

export const template = function(data) {
    if(regex.test(data.title)) {
        return {
            filepath: title2filepath(data.title),
        }
    }
}