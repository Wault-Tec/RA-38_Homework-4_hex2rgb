const HexToRgb = (props) => {
    const color = props.form.color;
    const finishInput = props.form.finishInput;

    //преобразуем hex в rgb
    const hex2rgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return ('rgb(' + parseInt(result[1], 16)
            + ',' + parseInt(result[2], 16)
            + ',' + parseInt(result[3], 16) + ')'
        )
    }

    //проверяем, что формат hex введен корректно
    const isInputCorrect = (color) => {
        const regexp = /^#[0-9A-F]{6}$/gi;
        if (regexp.test(color)) {
                return true
            }   
    } 

    //определяем цвет фона
    const setColor = (color, finishInput) => {
        if(finishInput && !isInputCorrect(color)) { 
            return '#f76c6c'
        } else if (finishInput && isInputCorrect(color)) { 
            return color
        }
    }

    //определяем содержимое label
    const setLabel = (color, finishInput) => {
        if(finishInput && !isInputCorrect(color)) { 
            return "Ошибка!"
        } else if (finishInput && isInputCorrect(color)) { 
            return hex2rgb(color)
        }
    }

    return (
        <div className="formWrapper" style={{backgroundColor: setColor(color, finishInput)}}>
            <form  className="form">
                <div className="inputWrapper">
                    <input className="formInput" name="color" value={props.form.color} onChange={props.onChange} placeholder="#000000"></input>
                    <label className="formLabel" htmlFor="color">
                    {setLabel(color, finishInput)}
                    </label>
                </div>
            </form>
        </div>
    )
}

export default HexToRgb;