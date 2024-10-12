const FormComponent = () => {
  return (
    <form>
      <div>
        <label>Name: </label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Bio: </label>
        <textarea name="bio"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
