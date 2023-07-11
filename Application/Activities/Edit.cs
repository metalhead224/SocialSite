<<<<<<< HEAD
using AutoMapper;
using Domain;
=======
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
<<<<<<< HEAD
        public class Command : IRequest
=======
        public class Command : IRequest<Result<Unit>>
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
        {
            public Activity Activity { get; set; }
        }

<<<<<<< HEAD
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
=======
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
<<<<<<< HEAD

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                _mapper.Map(request.Activity, activity);

                await _context.SaveChangesAsync();

                return Unit.Value;
=======
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                if (activity == null) return null;

                _mapper.Map(request.Activity, activity);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
            }
        }
    }
}