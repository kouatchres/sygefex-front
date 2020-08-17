import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { StyledButton, ButtonStyled } from '../utils/FormInputs'
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";
import { deleteRegionMutation } from "../queries&Mutations&Functions/Mutations";

const DeleteRegion = ({ id, ...others }) => {
  const updateCache = (cache, payload) => {
    // manually update the cache so that the data are all the same
    // 1. read the cache for the data we want
    const data = cache && cache.readQuery({ query: getAllRegionsQuery });
    cache && cache.writeQuery({
      query: getAllRegionsQuery,
      data: {
        regions: data.regions.filter(
          item => item.id !== payload.data.deleteRegion.id,
        ),
      },
    });
    console.log("getting payload");
    console.log(payload);
  };

  const [deleteRegion] = useMutation(deleteRegionMutation, {
    variables: { id },
    update: updateCache()
  }

  )
  return (
    <ButtonStyled>
      <StyledButton
        onClick={() => {
          if (confirm("Do you want to delete this Region ?")) {
            deleteRegion();
          }
        }}
      >
        {others.children}
      </StyledButton >
    </ButtonStyled >
  );
}

export default DeleteRegion;
