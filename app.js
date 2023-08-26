const suret = document.getElementById('suret')
const plane = document.getElementById('plane')
const speedUp = document.getElementById('speedUp')
const takeOff = document.getElementById('takeOff')
const refreshBtn = document.getElementById('refreshBtn')
const brake = document.getElementById('brake')
const land = document.getElementById('land')
const modal = document.getElementById('modal')


const planeObj = {
    speed: 0,
    qazVer(isNitro) {
        const cId = setInterval(() => {
            plane.style.left = (parseInt(plane.style.left) + 5) + 'px'
            if (this.speed > 200) {
                clearInterval(cId)
            }
            if (isNitro) {
                this.speed += 100
            } else {
                this.speed += 40
            }
            suret.textContent = `${this.speed} km/h`
        }, 100);
    },
    tormuz() {
        this.speed -= 20
        suret.textContent = `${this.speed} km/h`
    },
    tryFly() {
        if (this.speed < 200) {
            modal.style.display = 'block'
            modal.textContent = 'uca bilmiremde'
            setTimeout(() => {
                modal.style.display = 'none'
                modal.textContent = ''
            }, 1000);
        } else {
            const cId = setInterval(() => {
                plane.style.bottom = (parseInt(plane.style.bottom) + 10) + 'px'
                plane.style.left = (parseInt(plane.style.left) + 15) + 'px'
                if (parseInt(plane.style.bottom) > 200) {
                    clearInterval(cId)
                }
            }, 50);
        }
    },
    land() {
        if (this.speed > 200) {
            modal.style.display = 'block'
            modal.textContent = 'ay qa nagayrirsan!'
            setTimeout(() => {
                modal.style.display = 'none'
                modal.textContent = ''
            }, 1000);
        }
        else {
            this.speed = 0
            const cId = setInterval(() => {
                plane.style.bottom = (parseInt(plane.style.bottom) - 10) + 'px'
                plane.style.left = (parseInt(plane.style.left) + 15) + 'px'
                if (plane.style.bottom === '0px') {
                    clearInterval(cId)
                }
            }, 50);
        }
    }
}



speedUp.onclick = () => {
    planeObj.qazVer(true)
}
takeOff.onclick = () => {
    planeObj.tryFly()
}
brake.onclick = () => {
    planeObj.tormuz()
}
land.onclick = () => {
    planeObj.land()
}
refreshBtn.onclick = () => {
    location.reload()
}

