const input = document.querySelector("#text");
const addbtn = document.querySelector("button");
const div = document.querySelector(".list");

const h = document.querySelector("h1");
const clearbtn = document.createElement("button");
// clearbtn.textContent = "Clear"
// h.appendChild(clearbtn);
// h.style.paddingLeft = "520px";

let database;

addbtn.addEventListener("click", () => {
    let access = input.value;
    if (!access.trim()) return;

    const h1 = document.createElement("h1");
    h1.textContent = access;

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";

    const rembtn = document.createElement("button");
    rembtn.textContent = "Rem";

    editbtn.addEventListener("click", () => {
        const inp = document.createElement("input");
        inp.type = "text";
        inp.value = access;
        h1.textContent = ""; 
        h1.appendChild(inp);

        inp.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                h1.textContent = inp.value;

                let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
                const index = dataList.indexOf(access);
                if (index !== -1) {
                    dataList[index] = inp.value;
                    localStorage.setItem("dataList", JSON.stringify(dataList));
                }
                h1.appendChild(editbtn);
                h1.appendChild(rembtn);
            }
        });
    });

    rembtn.addEventListener("click", () => {
        h1.remove();

        let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
        dataList = dataList.filter(item => item !== access);
        localStorage.setItem("dataList", JSON.stringify(dataList));
    });

    // clearbtn.addEventListener("click", () => {
    //     localStorage.clear();
    //     div.remove()
    // })

    let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
    dataList.push(access);
    localStorage.setItem("dataList", JSON.stringify(dataList));

    h1.appendChild(editbtn);
    h1.appendChild(rembtn);

    h1.style.border = "2px solid black";
    h1.style.width = "50%";
    h1.style.margin = "20px 0 0 45px";
    div.appendChild(h1);
});

window.addEventListener('DOMContentLoaded', () => {
    let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
    dataList.forEach(item => {
        const h1 = document.createElement("h1");
        h1.textContent = item;

        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";

        const rembtn = document.createElement("button");
        rembtn.textContent = "Rem";

        editbtn.addEventListener("click", () => {
            const inp = document.createElement("input");
            inp.type = "text";
            inp.value = item;
            h1.textContent = "";
            h1.appendChild(inp);

            inp.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    h1.textContent = inp.value;

                    let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
                    const index = dataList.indexOf(item);
                    if (index !== -1) {
                        dataList[index] = inp.value;
                        localStorage.setItem("dataList", JSON.stringify(dataList));
                    }
                    h1.appendChild(editbtn);
                    h1.appendChild(rembtn);
                }
            });
        });

        rembtn.addEventListener("click", () => {
            h1.remove();
           
            let dataList = JSON.parse(localStorage.getItem("dataList")) || [];
            dataList = dataList.filter(i => i !== item);
            localStorage.setItem("dataList", JSON.stringify(dataList));
        });

        // clearbtn.addEventListener("click", () => {
        //     localStorage.clear();
        //     div.remove();
        // });

        h1.appendChild(editbtn);
        h1.appendChild(rembtn);

        h1.style.border = "2px solid black";
        h1.style.width = "50%";
        h1.style.margin = "20px 0 0 45px";
        div.appendChild(h1);
    });
});
