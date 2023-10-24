

const Events = () => {

    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full text-center justify-evenly flex-col lg:flex-row-reverse">
        <div className="text-center">
          <p className="text-center font-bold text-2xl underline">Visit Us</p>
        <form className="card-body text-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text">mihu@cat.com</span>
              </label>
              
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">+8801915900444</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Cat street, cat house Cat, kingdom</span>
              </label>
            </div>
          </form>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <p className="text-center font-bold text-2xl underline">Message Us</p>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Question</span>
              </label>
              <input type="text" placeholder="question" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary normal-case">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Events;