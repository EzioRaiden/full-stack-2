export default function Layout(props){
    
    const {children} = props
    const header=(
        <header>
            <h1 className="text-gradient">Raiden Reps</h1>
            <p><strong>The 30 simple workouts program</strong></p>
        </header>
    )
    const footer=(
        <footer>
            <p>Built by <a href="https://www.sourarghyade.com" target="_blank">Raiden</a><br/>Styled With <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    )
    return(
        <>
            {header}
            {children}
            {footer}
        </>
    )
}