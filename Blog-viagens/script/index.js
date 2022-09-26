const loader = document.getElementById("container-loader");
const body = document.getElementById("container-body");
const footer = document.getElementById("footer");

function clearLoader() {
    loader.style.display = 'none';
   body.style.display = 'block';
   footer.style.display = 'block';
}

setTimeout(clearLoader, 1000);