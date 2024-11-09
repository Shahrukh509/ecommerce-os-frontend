const WriteReview = ()=> {

    return (<>

<form>
                        <div className="form-group">
                          <label htmlFor="message">Your Review *</label>
                          <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Your Email *</label>
                          <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group mb-0">
                          <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                        </div>
                      </form>

    </>)

}
export default WriteReview