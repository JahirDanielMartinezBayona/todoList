const watch = document.querySelector('.section__watch');
    
export const updateTime = () => {
    const now = new Date();
    const formattedTime =  `${now.toLocaleDateString('en-GB')}, ${now.toLocaleTimeString()}`;
    watch.textContent = formattedTime;
};