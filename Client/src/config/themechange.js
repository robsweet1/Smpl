/* Reusable code for changing themes, example can be seen in useEffect in Board.js */
export const getTheme = (parentBoard) => {
    switch(parentBoard){
        case 'fishing':
            return {
                primary: getComputedStyle(document.documentElement).getPropertyValue('--fishing-primary'),
                secondary: getComputedStyle(document.documentElement).getPropertyValue('--fishing-secondary'),
                tertiary: getComputedStyle(document.documentElement).getPropertyValue('--fishing-tertiary'),
            }
        case 'fashion':
            return {
                primary: getComputedStyle(document.documentElement).getPropertyValue('--fashion-primary'),
                secondary: getComputedStyle(document.documentElement).getPropertyValue('--fashion-secondary'),
                tertiary: getComputedStyle(document.documentElement).getPropertyValue('--fashion-tertiary'),
            }
        case 'miscellaneous':
            return{
                primary: getComputedStyle(document.documentElement).getPropertyValue('--miscellaneous-primary'),
                secondary: getComputedStyle(document.documentElement).getPropertyValue('--miscellaneous-secondary'),
                tertiary: getComputedStyle(document.documentElement).getPropertyValue('--miscellaneous-tertiary'),
            }
        default:
            console.log('error, default case reached in themeChange')
    }
}

export const changeTheme = (theme) => {
    document.documentElement.style.setProperty('--primary', theme['primary'])
    document.documentElement.style.setProperty('--secondary', theme['secondary'])
    document.documentElement.style.setProperty('--tertiary', theme['tertiary'])
    document.documentElement.style.setProperty('--text-primary', 'black')
    document.documentElement.style.setProperty('--text-secondary', 'white')

}

export const cleanUpTheme = () => {
    document.documentElement.style.setProperty('--primary', '#6f7780')
    document.documentElement.style.setProperty('--secondary',  '#333c43')
    document.documentElement.style.setProperty('--tertiary',  '#495660')
    document.documentElement.style.setProperty('--text-primary', 'white')
    document.documentElement.style.setProperty('--text-secondary', 'black')
}
