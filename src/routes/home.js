import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios'

import Bit from '../components/bit'


export class Home extends Component {
    state = {
        prducts: null,
        loading: false
    }

    componentDidMount() {
        this.setState({loading: false});
        //Funcion hecha con insomnia format javascript/fetch TODO: usar ASYNC/AWAIT
        fetch(" https://us-central1-cost-calculator-3ae3c.cloudfunctions.net/api/elements", {
            "method": "GET",
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjhjZjBjNjQyZDQwOWRlODJlY2M5MjI4ZTRiZDc5OTkzOTZiNTY3NDAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2ViYXN0aWFuIFdldHplbCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUF1RTdtQl9YMjhYV3pyMlJGZ0x2azZ4SDUxblNOaDBpOEUyTmJ5NlZYQS1UdyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jb3N0LWNhbGN1bGF0b3ItM2FlM2MiLCJhdWQiOiJjb3N0LWNhbGN1bGF0b3ItM2FlM2MiLCJhdXRoX3RpbWUiOjE1ODM0NzI5MTYsInVzZXJfaWQiOiJ3b0tWZW9ET1FVZHlESklEamw1Qm1lZGlSTnoyIiwic3ViIjoid29LVmVvRE9RVWR5REpJRGpsNUJtZWRpUk56MiIsImlhdCI6MTU4MzQ3MjkxNiwiZXhwIjoxNTgzNDc2NTE2LCJlbWFpbCI6InNlYmEud2V0emVsQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAyNTQzNzAzOTMyMDQ4MjAzNjg0Il0sImVtYWlsIjpbInNlYmEud2V0emVsQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.YUHKFuJ_HahTwofkirqT25kq3vj7bsWOpKkwxxis9uYrlxp3EAU_8VxpXd5Nmbs7rxmPwrB0YbPr20jtQsPFd4Bnz-s5p3ZOFsZZVAXXvWvwJidcXnjXo-FDfgh5Zc5FC_CqvY9bsA5pLNaZRLP2bzouAB204fFqGiVz4Mv-fygLnSIl3sOncbseSSxyYqCllCd4RI5MOae9W-MKgykaOaTqhgMp4upabiT5DDfmTGrXi3jQfRvUnM4s3caTPnNaER5K_4ODbR7kpjZ2Ogs0vl0l-PENgXEV8Lfm7wk0A068Ydtcb0hrjHputLwnPhKYXsXr5aT95pgFJ67YU8hGNw"
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({prducts: json, loading:true})
                console.log(this.state)
                })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <p>Home</p>
                    {(this.state.loading) ? 
                        this.state.prducts.map(products=> <Bit image={products.image} name={products.name} key={products.id} className={"card"}/>)
                : <LinearProgress />}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Cosas..</p>
                </Grid>
            </Grid>
        )
    }
}

export default Home;
