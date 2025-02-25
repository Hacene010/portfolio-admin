import { Create, SimpleForm, TextInput, PasswordInput } from 'react-admin';

const UserPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <TextInput source="email" />
        <PasswordInput source="password" />
      </SimpleForm>
    </Create>
  );
};

export default UserPost;
