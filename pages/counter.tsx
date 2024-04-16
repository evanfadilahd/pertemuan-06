import { kurangCounter, tambahCounter } from "@/redux/counter/naikTurunSlice";
import { useDispatch, useSelector } from "react-redux";


export default function CounterNaikTurun() {
    // kita pilih reducer counter yang telah di daftarkan pada store.js
    const { totalCounter } = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    function tombolTambah() {       // handle untuk tombol counter tambah
        dispatch(tambahCounter())
    }

    function tombolKurang() {
        if(totalCounter > 0) {
            dispatch(kurangCounter())
        } else {
            alert('Minimal 0')
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card header">Total Mobil Saya</div>
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-2 mt-2">Jumlah : </div>
                                <div className="col-2">
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary"
                                            onClick={() => tombolKurang()}> - </button>
                                        <span className="form-control text-center">{totalCounter}</span>
                                        <button className="btn btn-outline-succes"
                                            type="button" onClick={() => tombolTambah()}> + </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}