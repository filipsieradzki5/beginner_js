const button = document.querySelectorAll('button');
const tabs = document.querySelectorAll('[role="tabpanel"]');
console.log(tabs)

function handleClick(e) {
    tabs.forEach(p => p.setAttribute("hidden", true));
    button.forEach(p => p.setAttribute("aria-selected", false));
    e.target.setAttribute("aria-selected", true);
    const id = e.target.id;
    const tabPanel = document.querySelector(`[aria-labelledby=${id}]`);
    tabPanel.hidden = false;
};


button.forEach(b => b.addEventListener('click', handleClick));

console.dir(tabs);

