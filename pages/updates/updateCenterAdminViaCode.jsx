import CenterAdminCodeEntry from "../../src/components/centerAdmin/CenterAdminCodeEntry";
import styled from "styled-components";

const CenterPage = styled.div`
  margin: 0 auto;
  width: 50vw;
  h5 {
    text-align: center;
    font-size: 2.5rem;
  }
`;

function updateCenterAdminViaCode({ query }) {
  return (
    <CenterPage>
      <CenterAdminCodeEntry />
    </CenterPage>
  );
}

export default updateCenterAdminViaCode;
