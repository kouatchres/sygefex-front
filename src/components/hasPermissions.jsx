const hasPermissions = (user, requiredPermissions) => {
  const matchedPermissions = user.roles.filter((permissionsUserHas) =>
    requiredPermissions.includes(permissionsUserHas)
  );
  if (!matchedPermissions.length) {
    throw new Error(`Insufficient permissions : 
            ${requiredPermissions} you have: ${user.roles}  `);
  }
};

export default hasPermissions;
