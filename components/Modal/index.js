import * as S from './styles'

const Modal = ({ children }) => {
    return (
        <S.OpacityModal>
            <S.Modal>
                {children}
            </S.Modal>
        </S.OpacityModal>
    )
}

export default Modal