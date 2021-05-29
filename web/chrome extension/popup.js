const btn = document.querySelector('#btn')
let isRun = false
const requiredUrl = "https://www.alarm.com/login.aspx"

btn.addEventListener('click', (e) => {

    chrome.tabs.getSelected(null, tab => {
        const url = tab.url

        if (url == requiredUrl) {
            const target = e.target
        
            if (isRun == true) {
                target.style.backgroundColor = 'rgb(150, 150, 150)'
                target.innerText = 'Start'
                isRun = false
            } else {
                target.style.backgroundColor = '#f02727'
                target.innerText = 'Stop'
                isRun = true
            }
        
            chrome.runtime.sendMessage({isRun}, (res) => {
                if (res.status) {
                    target.style.backgroundColor = 'rgb(150, 150, 150)'
                    target.innerText = 'Start'
                    document.body.style.backgroundColor = '#3ddb3d'
                    isRun = false
                }
            })
        } else {
            alert('Required url: This extension only applies to the website https://www.alarm.com/login.aspx')
        }
    })
})