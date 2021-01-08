import AppPreventDefault from '../Utilities/AppPreventDefault'

const Robot = () => {
    return(
        <div className="robot_div">
            <div className="an_div_wrkst" class="an_div_wrkst" id="an_div_wrkst">
                <label class="an_label_wrkst" id="an_div_wrkst">Name: </label>
                <textarea className="an_ta_wrkst" class="an_ta_wrkst thin_ta" id="an_div_wrkst" onKeyPress={AppPreventDefault}></textarea>
            </div>
            <div className="an_div_ipaddress" class="an_div_ipaddress" id="an_div_ipaddress">
                <label class="an_label_ipaddress" id="an_div_ipaddress">IP Address: </label>
                <textarea className="an_ta_ipaddress" class="an_ta_ipaddress thin_ta" id="an_div_ipaddress" onKeyPress={AppPreventDefault}></textarea>
            </div>
            <div className="an_div_model" class="an_div_model" id="an_div_model">
                <label class="an_label_wrkst" id="an_div_wrkst">Issue: </label>
                <textarea className="an_ta_wrkst" class="an_ta_wrkst thin_ta" id="an_div_wrkst"></textarea>
            </div>
        </div>
    )
}

export default Robot