const form = document.getElementById("eventForm");
        const eventContainer = document.getElementById("event-container");
        const emptyText = document.getElementById("emptyText");
        const keyText = document.getElementById("keyText");

        function createEvent(title, date, category, desc) {
            emptyText.style.display = "none";

            const card = document.createElement("div");
            card.className = "event-card";

            card.innerHTML = `
                <div class="delete-btn">×</div>
                <h4>${title}</h4>
                <p>${date}</p>
                <span class="badge">${category}</span>
                <p>${desc}</p>
            `;

            eventContainer.appendChild(card);
        }


        form.addEventListener("submit", function (e) {
            e.preventDefault();

            createEvent(
                title.value,
                date.value,
                category.value,
                description.value
            );

            form.reset();
        });

        
        document.getElementById("clearBtn").onclick = function () {
            eventContainer.innerHTML = "";
            eventContainer.appendChild(emptyText);
            emptyText.style.display = "block";
        };

        
        document.getElementById("sampleBtn").onclick = function () {
            createEvent(
                "Web Development Conference",
                "2026-02-15",
                "Conference",
                "Annual web technologies conference."
            );

            createEvent(
                "JavaScript Workshop",
                "2026-02-20",
                "Workshop",
                "Hands-on JavaScript session."
            );
        };

         
        eventContainer.addEventListener("click", function (e) {
            if (e.target.classList.contains("delete-btn")) {
                e.target.parentElement.remove();

                if (eventContainer.children.length === 1) {
                    emptyText.style.display = "block";
                }
            }
        });

         
        document.addEventListener("keydown", function (e) {
            keyText.innerText = "You Pressed: " + e.key;
        });