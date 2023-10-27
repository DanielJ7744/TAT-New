// This script is for making location selector in sections to be working

    document.addEventListener("DOMContentLoaded", function(event) { 

        let changeByLoading = false

        if (localStorage.getItem("customerLocation") !== null) {
            changeByLoading = true
            const savedLocation = JSON.parse(localStorage.getItem("customerLocation")).value
            document.querySelector('.city__selector select').value = savedLocation;
            setTimeout(() => {
            changeByLoading = false
            }, "1000")
        }

        document.querySelector('.city__selector select').onchange = function() {
            if (!changeByLoading) {
            var index = this.selectedIndex;
            var newLocation = this.children[index].getAttribute('value')
            var dataToSave = {value: newLocation, timestamp: new Date().getTime()}
            localStorage.setItem("customerLocation", JSON.stringify(dataToSave));
            window.location.href = `/pages/${newLocation.toLocaleLowerCase()}`;
            }

        }

    });

// This script is for making location selector in sections to be working


// This script is for immediate location popup trigger button
    document.addEventListener("DOMContentLoaded", function(event) { 

        const popupTriggerButtons = document.querySelectorAll('.popup-trigger-button') 

        for (const triggerButton of popupTriggerButtons) {
            triggerButton.addEventListener('click', function handleClick() {
                const modalMain = document.getElementById("locationPopupBody");
                modalMain.style.display = "block";
            });
        }

    });

// This script is for immediate location popup trigger button