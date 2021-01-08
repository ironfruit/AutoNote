import AppPreventDefault from '../Utilities/AppPreventDefault'

const Scanner = () => {
    return(
        <div className="scanner_div">
            <div className="an_div_wrkst" class="an_div_wrkst" id="an_div_wrkst">
                <label class="an_label_wrkst" id="an_div_wrkst">Brand: </label>
                <textarea className="an_ta_wrkst" class="an_ta_wrkst thin_ta" id="an_div_wrkst" onKeyPress={AppPreventDefault}></textarea>
            </div>
            <div className="an_div_brand" class="an_div_brand" id="an_div_brand">
                <label class="an_label_brand" id="an_div_brand">Model: </label>
                <textarea className="an_ta_brand" class="an_ta_wrkst thin_ta" id="an_div_wrkst" onKeyPress={AppPreventDefault}></textarea>
            </div>
            <div className="an_div_model" class="an_div_model" id="an_div_model">
                <label class="an_label_wrkst" id="an_div_wrkst">Issue: </label>
                <textarea className="an_ta_wrkst" class="an_ta_wrkst thin_ta" id="an_div_wrkst"></textarea>
            </div>
        </div>
    )
}

export default Scanner
