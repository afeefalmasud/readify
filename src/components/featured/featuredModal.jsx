import {Modal, Button} from "@heroui/react";

const FeaturedModal = ({book}) => {
  return (
    <div>
        <Modal>
            <Button className="w-full" variant="secondary">Description</Button>
            <Modal.Backdrop variant={"blur"}>
                <Modal.Container placement="bottom">
                <Modal.Dialog className="sm:max-w-90">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                    <Modal.Heading>{book.bookName}</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                    <p>
                       {book.description}
                    </p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className="w-full" slot="close">
                        Back
                    </Button>
                    </Modal.Footer>
                </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
            </Modal>
    </div>
  )
}

export default FeaturedModal