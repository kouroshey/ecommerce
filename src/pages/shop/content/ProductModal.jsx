import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

import { getModalShow } from "./store";
import { useSelector } from "react-redux"
import Modal from "../../../components/ui/Modal"

const ProductModal = ({ modalShowHandler, img, title, desc, price }) => {
    const isModalShow = useSelector(getModalShow)
    if (!isModalShow) {
        return null
    }
    return (
        <Modal>
            <div>
                <section>
                    <img src="" alt="" />
                </section>
                <section>
                    <div>
                        <div className="flex justify-between">
                            <span><IoHeartOutline /></span>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </section>
            </div>
        </Modal>
    )
}

export default ProductModal