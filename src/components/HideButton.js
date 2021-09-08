
function HideButton ({commentButton, handleClick})  {


    return (
        <button onClick={handleClick}>{commentButton ? "hide Comments" : "Show Comments"}</button>
    )
}

export default HideButton;