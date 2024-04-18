import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { colors, fonts, kpis } from '../var';

const KPI_Container = styled.div`
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
    margin-left: 21.568em;
    margin-top: 7.6em;
`;

const KPI_Card = styled.div`
    width: ${kpis.width};
    height: ${kpis.height};
    background-color: ${kpis.backgroundColor};
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    border-radius: ${kpis.borderRadius};
    box-shadow: ${kpis.boxShadow};
`;

const KPI_IconBox = styled.div`
    width: 65px;
    height: 65px;
    text-align: center;
    svg {
        padding-top: 35%;
        path {
            fill: #E23428;
        }
    }
    #checkout {
        transform: rotateY(180deg);
    }
`;

const KPI_DataBox = styled.div`
    
    p {
        margin: 0;
        font-family: ${fonts.poppins.family};
        font-size: ${fonts.poppins.size_KPI_data};
    }
    small {
        font-family: ${fonts.poppins.family};
        color: ${colors.KPIs_data_small};
        font-size: ${fonts.poppins.size_KPI_data_small};
    }
`;

export const KPIs = () => {

    return(
        <>
            <KPI_Container>
                <KPI_Card>
                    <KPI_IconBox>
                        <FontAwesomeIcon icon={faBed} />
                    </KPI_IconBox>
                    <KPI_DataBox>
                        <p>0</p>
                        <small>Total Bookings</small>
                    </KPI_DataBox>
                </KPI_Card>
                <KPI_Card>
                    <KPI_IconBox>
                        <FontAwesomeIcon icon={faCalendarCheck} />
                    </KPI_IconBox>
                    <KPI_DataBox>
                        <p>0%</p>
                        <small>Occupancy</small>
                    </KPI_DataBox>
                </KPI_Card>
                <KPI_Card>
                    <KPI_IconBox>
                        <FontAwesomeIcon icon={faPersonWalkingLuggage} />
                    </KPI_IconBox>
                    <KPI_DataBox>
                        <p>0</p>
                        <small>Check In</small>
                    </KPI_DataBox>
                </KPI_Card>
                <KPI_Card>
                    <KPI_IconBox>
                        <FontAwesomeIcon id='checkout' icon={faPersonWalkingLuggage} />
                    </KPI_IconBox>
                    <KPI_DataBox>
                        <p>0</p>
                        <small>Check Out</small>
                    </KPI_DataBox>
                </KPI_Card>
            </KPI_Container>
        </>
    );
}