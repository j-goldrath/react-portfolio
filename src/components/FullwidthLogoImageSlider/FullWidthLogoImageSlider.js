import React from 'react';

// import CSS file
import './FullWidthLogoImageSlider.css';

// any variables that need to be defined outside function
const container = document.querySelector('.images-line');
// const basis = container.querySelectorAll('.rolling-image').length || 0;

const rolling = (loop) => {
    if (container) {
        const imageList = container.querySelectorAll('.rolling-image')
        const basicWidth = imageList[0].offsetWidth + parseInt(getComputedStyle(imageList[0]).marginLeft) + parseInt(getComputedStyle(imageList[0]).marginRight)

        let translation = 0

        if (!loop) {
            if (imageList && imageList.length !== 0) {
                const urlList = []
                imageList.forEach(image => {
                    urlList.push(image.src)
                })

                urlList.forEach((url, i) => {
                    const image = document.createElement('img')
                    image.classList.add('rolling-image')
                    image.src = urlList[i]
                    image.alt = imageList[i].alt

                    container.append(image)

                    if (i < urlList.length / 2) {
                        translation -= basicWidth
                    }
                })

                container.classList.add('rolling')
                container.style.transform = `translateX(${translation}px)`
                container.style.transition = 'transform 6s linear'

                setInterval(() => {
                    container.style.transform = 'translateX(0)'
                    container.style.transition = 'none'

                    rolling(true)
                }, 6000)
            }
        } else {
            if (imageList && imageList.length !== 0) {
                const urlList = []
                imageList.forEach(image => {
                    urlList.push(image.src)
                })

                urlList.forEach((url, i) => {
                    if (i < urlList.length / 2) {
                        if (i < urlList.length / 4) {
                            translation -= basicWidth
                        }
                    }
                })

                container.style.transform = `translateX(${translation}px)`
                container.style.transition = 'transform 6s linear'

                setInterval(() => {
                    container.style.transform = 'translateX(0)'
                    container.style.transition = 'none'

                    rolling(true)
                }, 6000)
            }
        }

        return
    }

    return
}

// export function a class that extends React.Component
class FullWidthLogoImageSlider extends React.Component {








    // render method
    render() {
        return (
            <div className="wrapper">
                <div className="images-line">
                    <img src="https://logos-world.net/wp-content/uploads/2021/02/Trello-Symbol.png" alt="Trello" className="rolling-image" />
                    <img src="https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-1987-2009.png" alt="CocaColla" className="rolling-image" />
                    <img src="https://logos-world.net/wp-content/uploads/2021/02/Trello-Symbol.png" alt="Trello" className="rolling-image" />
                    <img src="https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-1987-2009.png" alt="CocaColla" className="rolling-image" />
                    <img src="https://logos-world.net/wp-content/uploads/2021/02/Trello-Symbol.png" alt="Trello" className="rolling-image" />
                    <img src="https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-1987-2009.png" alt="CocaColla" className="rolling-image" />
                    <img src="https://logos-world.net/wp-content/uploads/2021/02/Trello-Symbol.png" alt="Trello" className="rolling-image" />
                    <img src="https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-1987-2009.png" alt="CocaColla" className="rolling-image" />
                </div>
            </div>
        )
        
    }

    // hook to be called after the component is mounted
    componentDidMount() {
        rolling(false);
    }
}

export default FullWidthLogoImageSlider;