import Navbar from "@/Components/User/Navbar";
import Tron from "@/Components/User/Tron";
import { Head } from "@inertiajs/react";

export default function Welcome(props) {
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <Tron />
            <div className="p-5">
                <div className="flex justify-center gap-5">
                    <div className="card">
                        <div className="card-body ">
                            <div className="item overflow-hidden h-80 w-80">
                                <img
                                    className="h-80 w-80 object-cover object-center"
                                    src="/img/tron/1.jpeg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body ">
                            <div className="item overflow-hidden h-80 w-80">
                                <img
                                    className="h-80 w-80 object-cover object-center"
                                    src="/img/tron/2.jpeg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body ">
                            <div className="item overflow-hidden h-80 w-80">
                                <img
                                    className="h-80 w-80 object-cover object-center"
                                    src="/img/tron/3.jpeg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
