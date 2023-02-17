import React, {
    useState,
    useContext,
    useEffect
  } from 'react';
  import PageTitle from '../components/common/PageTitle';
  import DashboardMetric from './../components/DashboardMetric';
  import { FetchContext } from '../context/FetchContext';
  
  const Curriculum = () => {
    const fetchContext = useContext(FetchContext);
    const [dashboardData, setDashboardData] = useState();
  
    useEffect(() => {
      const getDashboardData = async () => {
        try {
          const { data } = await fetchContext.authAxios.get(
            'dashboard-data'
          );
          setDashboardData(data);
        } catch (err) {
          console.log(err);
        }
      };
  
      getDashboardData();
    }, [fetchContext]);
  
    return (
      <>
        <PageTitle title="Hoja de Vida" />
        {dashboardData ? (
          <>
            <div className="mb-4 flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Tipo Documento"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Número Documento"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Lugar de Expedición"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="No. Libreta Militar"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Nombres"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Apellidos"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Correo Electronico"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Estado Civil"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Género"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Nacionalidad"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="No. hijos"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Lugar de Residencia"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Barrio"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Lugar de Nacimiento"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Dirección"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Teléfono"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Celular"
                />
              </div>
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Fecha de Nacimiento"
                />
              </div> 
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Edad"
                />
              </div>  
              <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Profesión"
                />
              </div>  
            </div>
            <div className="mb-4 flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 sm:mr-2 mb-4 sm:mb-0">
                <DashboardMetric
                  title="Referencias Personales"
                />
              </div>
            </div>  
            
            
            
            
          </>
          
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  
export default Curriculum;