namespace TIN.Angular.Results
{
    public class AjaxResult
    {
        public readonly bool Success;
        public readonly string Message;

        public AjaxResult(bool success, string message)
        {
            Success = success;
            Message = message;
        }
    }
}
