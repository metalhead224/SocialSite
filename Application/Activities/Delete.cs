<<<<<<< HEAD
=======
using Application.Core;
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
<<<<<<< HEAD
        public class Command : IRequest
=======
        public class Command : IRequest<Result<Unit>>
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
        {
            public Guid Id { get; set; }
        }

<<<<<<< HEAD
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                _context.Remove(activity);

                await _context.SaveChangesAsync();

                return Unit.Value;
=======
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity == null) return null;

                _context.Remove(activity);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to delete the activity");

                return Result<Unit>.Success(Unit.Value);
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
            }
        }
    }
}