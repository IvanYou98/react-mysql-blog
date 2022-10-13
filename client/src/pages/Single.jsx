import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom'
import Menu from '../components/Menu';


const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
                <img src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt="" />
                <div className='user'>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    <div className='info'>
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className='options'>
                        <div className='edit-icon'>
                            <Link to='/write?edit=2'>
                                <EditOutlinedIcon />
                            </Link>
                        </div>
                        <div className='remove-icon'>
                            <DeleteOutlineOutlinedIcon />
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Post 001</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, impedit illum voluptatem architecto repudiandae saepe porro voluptates odit, maiores et quod magni ratione ad vitae earum nostrum sunt numquam quo animi, repellendus accusamus? Provident esse autem, ullam voluptatem nam molestias, alias maiores optio eius corporis beatae a nobis exercitationem minima voluptatum voluptas sit quos incidunt laudantium rerum. Quaerat vel aliquam consectetur nesciunt dolorem recusandae in consequatur architecto sit id. Laborum exercitationem commodi ipsam enim aut omnis tempora nostrum eum quae! Natus, cumque ipsa autem sequi laborum ut! Iure dicta dolorem iusto, consequatur, neque enim maiores, aspernatur ipsum sint at asperiores laboriosam unde fugit. Fugit commodi nisi culpa blanditiis soluta quibusdam ratione! Qui, eveniet. Minus, vero libero suscipit eligendi nesciunt rem dolorum, accusamus incidunt perferendis velit sequi laborum similique repellendus, saepe earum explicabo. Quis fuga voluptatem culpa consequuntur suscipit? Quae beatae perferendis omnis aperiam iste, nulla officia a. Perferendis ea commodi beatae minus adipisci quis mollitia voluptatibus consequuntur nobis totam saepe officia nam consequatur minima ipsa dignissimos sunt, impedit quisquam est. Quae quidem ipsa laboriosam eligendi blanditiis, sint autem perspiciatis, doloremque reiciendis cupiditate earum. Beatae vitae quasi eos molestiae obcaecati numquam at ea sed reprehenderit cum. Impedit at animi repudiandae earum.
                    </p>
                </div>
            </div>
            <div className='menu'>
                <Menu />
            </div>
        </div>
    )
}

export default Single