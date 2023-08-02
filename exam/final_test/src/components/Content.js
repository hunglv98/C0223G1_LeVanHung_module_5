import React, { useEffect, useState } from "react";
import { deleteSong, editSong, findAllSong, findSongByName, findSongByid } from "../service/SongService";
import { Link } from "react-router-dom";
import { findStatusById } from "../service/StatusService";
import Swal from "sweetalert2";

function Content() {
    const [currentPage, setCurrentPage] = useState(0)    
    const [songs, setSongs] = useState([])
    const getList = async () => {
        const data = await findAllSong(currentPage)
        setSongs(data.content)
    }
    useEffect(() => {

        getList()
    }, [currentPage])
    const searchByName = async () => {
        const name = document.getElementById('search').value
        if (name == "") {
            getList();
        } else {
            const data = await findSongByName(name,0)   
            setSongs(data.content)
        }
    }
    const playSong = async (id) => {
        const song = await findSongByid(id)
        document.getElementById('playing').innerText = `${song.name}-${song.singer}`
        console.log("abc")
    }
    const changeStatus = async (id) => {
        const song = await findSongByid(id);
        console.log(song);
        if (song.status.id === 2) {
            Swal.fire({
                icon: "error",
                text: "Your song was Pulic!!!",
                timer: 2000
            })
        } else {
            Swal.fire({
                icon: "warning",
                title: `Do you want to public song "${song.name}"?`,
                text: "This task can't undo!!!",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                reverseButtons: true,
                showCancelButton: true
            }).then(async (res) => {
                if (res.isConfirmed) {
                    const newStatus = await findStatusById(2);
                    const newSong = {
                        ...song, status: newStatus
                    }
                    console.log(newSong);
                    await editSong(newSong)
                    console.log("edit");
                    await getList()
                    Swal.fire({
                        icon: "success",
                        text: "Your song is now Pulic!!!",
                        timer: 2000

                    })
                } else if (res.dismiss === Swal.DismissReason.cancel) { }
            })
        }
    }

    const deleteSongByid = async (id) => {
        Swal.fire({
            icon: "warning",
            title: "Do you want to delete?",
            text: "This task can't undo",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            reverseButtons: true,
            showCancelButton: true
        }).then(async (res) => {
            if (res.isConfirmed) {
                console.log(id);
                await deleteSong(id);
                await getList();
                Swal.fire({
                    icon: "success",
                    text: "Delete Successfully",
                    timer: 2000
                })
            } else if (res.dismiss === Swal.DismissReason.cancel) { }
        })
    }

    const increasePage = async () => {
        const nextPage = currentPage + 1;
        const data = await findAllSong(currentPage)
        if (nextPage < data.totalPages) {
            setCurrentPage(nextPage)
        }
    }

    const decreasePage = () => {
        const previous = currentPage - 1
        if (previous >= 0) {
            setCurrentPage(previous)
        }
    }

    return (
        <>
            <div className="container-xl">
                <div>
                    <div className="table-wrapper">
                        <div className="table-title table-responsive">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Playlist <b>Music</b></h2>
                                    <div id="playing" style={{ color: "yellow" }}></div>
                                    <h2>Playing...</h2>
                                </div>
                                <div className="col-sm-6">

                                    <Link to={`/create`} className="btn btn-success" data-toggle="modal">
                                        <i className="material-icons"></i> <span>Add New Song</span></Link>

                                    <button onClick={() => searchByName()} className="btn btn-primary">Search</button>
                                    <input type="text" id="search" className="form-control" style={{ "width": '200px' }} placeholder="-Input Name's Song-"></input>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Singer</th>
                                    <th>Time</th>
                                    <th>Like</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {songs.map((s, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{s.id}</td>
                                            <td><Link onClick={() => { playSong(s.id) }}>{s.name}</Link></td>
                                            <td>{s.singer}</td>
                                            <td>{s.duration}</td>
                                            <td>{s.numberLike}</td>
                                            <td>{s.status.name}</td>
                                            <td>
                                                <button onClick={() => changeStatus(s.id)} className="btn btn-outline-warning" >Public</button>
                                            </td>
                                            <td>
                                                <button onClick={() => { deleteSongByid(s.id) }} className="btn btn-outline-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <ul className="pagination">
                                <li className="page-item "><Link onClick={() => decreasePage()} className="page-link" >Previous</Link></li>

                                <li className="page-item"><Link onClick={() => increasePage()} className="page-link">Next</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default Content