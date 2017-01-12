namespace TIN.Angular.Results
{
    public class EntityAddedAjaxResult : AjaxResult
    {
        public int ModelId { get; }

        public EntityAddedAjaxResult(int modelId, string message) : base(true, message)
        {
            ModelId = modelId;
        }
    }
}
