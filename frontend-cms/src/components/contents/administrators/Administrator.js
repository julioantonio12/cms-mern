export default function Administrators(){
    return(
        <div className="content-wrapper" style={{minHeight: "494px" }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">                
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Administradores</h1>
                        </div>                
                    </div>
                </div>
            </div>
        
            <div className="content">
                <div className="container-fluid">
                    <div className="row">					
                        <div className="col-lg-12">
                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h5 className="m-0">
                                        <button className="btn btn-primary" data-toggle="modal" data-target="#createAdmin">Crear administrador</button>
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped dt-responsive" style={{"width":"100%"}}>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
    );
}
