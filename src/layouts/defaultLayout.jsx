const DefaultLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4">{children}</main>
        </div>
    );
};

export default DefaultLayout;
