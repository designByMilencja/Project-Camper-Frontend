export   const handleErrors = (err: Error | any) => {
    if (err instanceof Error) {
        console.log(err.message);
    } else {
        console.log(err);
    }
};
