export function loadPhoto(number = 0, width = 1000, height = 600) {
    return new Promise((resolve, response) => {
        fetch(`http://localhost:3000/photos/${number}/${width}/${height}`)
            .then(res => res.blob())
            .then(blob => resolve(URL.createObjectURL(blob)))
            .catch(err => reject(err))
    })
}