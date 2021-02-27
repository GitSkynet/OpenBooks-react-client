import service from '../api/service';

class Controller {
    state = {
        book: {}
    }
    getDetailsBook = async () => {
        const id = this.props.match.params.id;
        const res = await service.getDetailsBook(id);
        console.log("res", res);
        this.setState({ book: res});
        return this.state.book;
    };
};

export default Controller;


