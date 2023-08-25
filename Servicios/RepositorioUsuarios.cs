namespace ManejoPresupuesto.Servicios
{
    public interface IRepositorioUsuarios
    {

    }
    public class RepositorioUsuarios: IRepositorioUsuarios
    {
        private readonly string connectionString;

        public RepositorioUsuarios(IConfiguration configuration)
        {
            connectionString = configuration.GetConnectionString("DefaultConnection");
        }
    }
}
