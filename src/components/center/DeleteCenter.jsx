import React from "react";
import { Mutation } from "react-apollo";
import { StyledButton, ButtonStyled } from '../utils/FormInputs'
import { getAllCentersQuery } from "../queries&Mutations&Functions/Queries";
import { deleteCenterMutation } from "../queries&Mutations&Functions/Mutations";


const DeleteCenter = (props) => {
  updateCenterCache = (cache, payload) => {
    // manually update the cache so that the data are all the same
    // 1. read the cache for the data we want
    const data = cache.readQuery({ query: getAllCentersQuery });
    // select all the other regions except the 
    //  3. write the new data back to the cache

    cache.writeQuery({ query: getAllCentersQuery, data });
    cache && cache.writeQuery({
      query: getAllCentersQuery,
      data: {
        centers: data.centers.filter(
          item => item.id !== payload.data.deleteCenter.id,
        ),
      },
    });
    console.log({ payload });
  };
  const [deleteCenter] = useMutation(deleteCenterMutation, {
    variables: { id: props.id },
    update: updateCenterCache()
  })


  return (
    <ButtonStyled>
      <StyledButton
        onClick={() => {
          if (confirm("Voulez-vous supprimer ce centre ?")) {
            deleteCenter();
          }
        }}
      >
        {props.children}
      </StyledButton>

    </ButtonStyled>
  );
}

export default DeleteCenter;
