import { reactive } from "vue"

export function useResize(obj = {}) {

    const sizeObj = reactive({
        textSize: "",
        iconSize: "",
        btnSize: "",
        numInputSize: "",
    })

    const handleResize = () => {
        const windowWidth = window.innerWidth
        if (windowWidth < 768) {
            sizeObj.iconSize = "30px"
            sizeObj.textSize = "text-xl"
            sizeObj.btnSize = "small"
            sizeObj.numInputSize = "small"
            obj.item.height = obj.item.mobile
            obj.item.width = obj.item.mobile
            obj.corner.height = obj.corner.mobile
            obj.corner.width = obj.corner.mobile
        } else {
            sizeObj.iconSize = "50px"
            sizeObj.textSize = "text-md"
            sizeObj.btnSize = "default"
            sizeObj.numInputSize = "default"
            obj.item.height = obj.item.computer
            obj.item.width = obj.item.computer
            obj.corner.height = obj.corner.computer
            obj.corner.width = obj.corner.computer
        }
    }

    return {
        sizeObj,
        handleResize
    }
}